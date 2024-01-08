import React, { Component } from "react";
import UserService from "../services/UserService";
import '../styles/viwUser.css';
import fotto from '../assets/bgg.jpg'; 

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="bg">
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Patient Details</h3>
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <td><strong>Nama:</strong></td>
                  <td>{user.nama}</td>
                </tr>
                <tr>
                  <td><strong>Usia:</strong></td>
                  <td>{user.usia}</td>
                </tr>
                <tr>
                  <td><strong>Alamat:</strong></td>
                  <td>{user.alamat}</td>
                </tr>
                <tr>
                  <td><strong>Jenis Kelamin:</strong></td>
                  <td>{user.jenis_kelamin}</td>
                </tr>
                <tr>
                  <td><strong>Deskripsi:</strong></td>
                  <td>{user.deskripsi}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="imagess">
          <img src={fotto} alt="Foto" />
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
