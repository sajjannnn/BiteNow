import React from "react";

interface UserProps {
  name: string;
  location: string;
}

interface UserState {
  count: number;
}

class UserClass extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { count,} = this.state;
    const { name, location } = this.props;

    return (
      <div className="mt-15 text-left">
        <h1>Name :{name} Sajjan Kumar </h1>
        <h3>Location : {location} Delhi</h3>
        <h3>Contact : sajjanaasht@gmail.com</h3>
        <button
          className=" p-5 bg-amber-100 rounded-2xl"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Tap to Increase Count
        </button>
        <h3>Count : {count}</h3>
      </div>
    );
  }
}

export default UserClass;
