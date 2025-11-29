import React from "react";


class UserClass extends React.Component {
    constructor( props:{name : string}){
        super(props)
    }


    render(){
        return(
            <div className="userClass">
                <h1>Name :{this.props.name}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }   Kumar</h1>
                <h3>Location : Delhi</h3>
                <h3>Contact : sajjanaasht@gmail.com</h3>

            </div>
        )
    }
}

export default UserClass;