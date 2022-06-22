import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class ScreenDetails extends React.Component {
    state = {
      userDetail: {},
      userEdition: "editButton",
      nameInput: "",
      emailInput: ""
    };

    componentDidMount() {
        this.getUserDetails();
      }

    getUserDetails = () => {
        const urlSearch = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
            this.props.userId}`
        
        axios.get(urlSearch, {headers: {
                Authorization: 'jil-moutinho-ailton'
            } }
          )
          .then(res => {
            this.setState({ userDetail: res.data });
          })
          .catch(err => {
            console.log(err);
          });
      };






      render(){
          return (
              <div>
                  Oi
              </div>
          );
      };
};

export default ScreenDetails;