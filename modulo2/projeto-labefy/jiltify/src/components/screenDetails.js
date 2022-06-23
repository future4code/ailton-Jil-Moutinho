import React from "react";
import axios from "axios";
/* import styled from "styled-components"; */

class ScreenDetails extends React.Component {

    getUserDetails = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks
        /${this.props.item.id}`;
    
        axios
          .get(url, {
            headers: {
              Authorization: "jil-moutinho-ailton",
            },
          })
          .then((res) => {
            this.setState({ userData: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      };

    render(){
        return(
            <p>Teste Lista details</p>
        );
    }
}

export default ScreenDetails;