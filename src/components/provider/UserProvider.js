import React from "react";
import axios from "axios";
import { serverUrl } from "../../config";
const UserContext = React.createContext();
export const UserConsumer = UserContext.Consumer;

export default class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.getUser();
  }

  /**
   * Function fetch the user data based
   * on user id
   */
  getUser = () => {
    const UserId = JSON.parse(localStorage.getItem("UserId"));
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    axios
      .get(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GetEmployeeInformation/" +
          UserId,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId
          }
        }
      )
      .then(response => {
        console.log(response.data.Employee[0]);
        this.setState({
          user: response.data.Employee[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          getUser: this.getUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
