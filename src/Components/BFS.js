/* eslint-disable no-loop-func */
import React from "react";
import retrieveNodes from "./steamCommunityAPI";
import getName from "./getName";
import "./Input.css";

var finalResultString = "";

export default class BFS extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            src: props.src,
            dest: props.dest,
            invalidName: false,
            doesExist: false,
            Path: [],
            message: "",
            q: [],
            time: 0
        };
    }


    async FindPathBFS(id) {
        this.state.q.push(this.state.src);
        var previous = new Map();
        var visited = new Map();
        visited.set(this.state.src, true);
        previous.set(this.state.src, null);
        console.log(this.state.src);
        await retrieveNodes(this.state.src).then(test => {
            test = test.map(friend => friend.steamid)
            if (test.length === 0) {
                this.setState({invalidName: true});
                console.log("invalid id");
            }
        });
        var count = 0;
        while (this.state.q.length != 0 && this.state.invalidName == false) {
            count++
            console.log('new loop' + count)
            var current = this.state.q.shift();
            await retrieveNodes(current).then(friends => { // This is what stops the actual loop
                friends = friends.map(friend => friend.steamid)

                for (var i = 0; i < friends.length; i++) {
                    console.log(friends[i], ' and ', this.state.dest);
                    if (friends[i] === this.state.dest) {
                        console.log("found it!");
                        this.setState({doesExist: true});
                        previous.set(friends[i], current);
                        break;
                    }
                    if (visited.has(friends[i]) === false) {
                        console.log("pushing to queue");
                        this.state.q.push(friends[i]);
                        visited.set(friends[i], true);
                        previous.set(friends[i], current);
                    }
                    else
                        console.log("already found");
                }
            })

            if (this.state.doesExist === true || count === 5000) {
                break;
            }
        }

        if (this.state.doesExist === true) {
            var prev = previous.get(this.state.dest);
            var path = [];
            path.push(this.state.dest)

            while (prev != null) {
                path.push(prev);
                prev = previous.get(prev);
            }
            while (path.length !== 0) {
                this.setState({
                    Path: [...this.state.Path, path.pop()]
                });
            }
            var curr = "";
            var tempPath = this.state.Path;
            for (var i = 0; i < tempPath.length; i++) {
                curr = tempPath[i];
                await getName(curr).then(na => {
                    tempPath[i] = {
                        id: curr,
                        name: na
                    };
                });
            }
            this.setState({Path: tempPath});
        }
    };
    loading = () =>
    {
        return (<div><p>loading</p></div>);
    }
    info(index)
    {
        return (<div style = {{display: "block", border: "4em solid black"}}> " +
                <h1>{this.state.Path[index].name}</h1>
                <h1>{this.state.Path[index].id}</h1>
                </div>);
    }
    output = () =>{ // After getting the necessary information, it calculates the path
        var t0 = performance.now();
        this.loading();
        this.FindPathBFS().then(() => {
            var t1 = performance.now();
            this.setState({time: ((t1 - t0) * Math.pow(10, -3)).toFixed(2)});
            if (this.state.invalidName === true) {
                this.setState({message: "The entered source steam ID does not exist"})
            } else if (this.state.doesExist === false) {
                this.setState({message: "The shortest path does not exist, is too long, or is blocked by an individual whose steam profile is private"})
            } else {    // If all information is valid
                for (var i = 0; i < this.state.Path.length - 1; i++) {
                  finalResultString += "<div style = {{display: \"block\", border: \"4em solid black\">" + this.state.Path[i].name + "</div>";
                  this.setState({message: this.state.message + this.state.Path[i].name + ' -> '});
                }
                finalResultString += "<div style = {{display: \"block\", border: \"4em solid black\">" + this.state.Path[i].name + "</br></div>";
                this.setState({message: this.state.message + this.state.Path[i].name});
            } // Adds HTML to inject later on for every name
        });

    };
    render(){ // Render displays all of the nodes and information on success
        return (
            <div>
                <h2>BFS</h2>
                <div className="nodeShow">
                    <span style = {{display: "inline-block", fontSize: 30}}>{this.state.src}</span>
                    <span style = {{display: "inline-block", fontSize: 30, size: 30}}>&nbsp;To&nbsp;</span>
                    <span style = {{display: "inline-block",  fontSize: 30}}>{this.state.dest}</span>
                </div>
                <div style = {{display: "block"}}><h1> </h1> </div>
                <button onClick = {this.output} className = "buttonDown">Search</button>
                <h2> Time: {this.state.time} sec</h2>
                <div id="results"></div>
                {this.input()}
            </div>
        );
    }
    // Input injects the HTML accumulated before
    input(){
      setTimeout(() => {document.getElementById("results").innerHTML = finalResultString;console.log('final input now');}, 1000);
      
    }
}
