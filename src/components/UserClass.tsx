import React from "react";

interface UserProps{
    name : string;
    location : string;
}

interface UserState{
    count : number;
    count2 : number;
}

class UserClass extends React.Component<UserProps,UserState>{
    constructor( props: UserProps){
        super(props)

        this.state = {
            count: 0,
            count2 : 2,
        }
    }
    render(){
        const {count, count2} = this.state;
        const {name,location} = this.props;

        return(
            <div className="userClass">
                <h1>Name :{name} </h1>
                <h3>Location : {location}</h3>
                <h3>Contact : sajjanaasht@gmail.com</h3>
            <button onClick={()=>{
               this.setState({count : this.state.count +1 })
            }
            }
            >Increase Count</button>
                <h3>Count : {count}</h3>
                <h3>Count2 : {count2}</h3>

            </div>
        )
    }
}

export default UserClass;