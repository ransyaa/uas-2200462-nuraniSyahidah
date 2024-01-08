import React, { Component } from 'react';
import UserService from '../services/UserService';
import '../styles/listUser.css';
import Swal from 'sweetalert2';
import foto1 from '../assets/puskesmas.jpg';

class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            search: '',
        };
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    deleteUser(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                UserService.deleteUser(id).then((res) => {
                    this.setState({
                        users: this.state.users.filter((user) => user.id !== id)
                    });
                });
            }
        });
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data === null || res.data.length === 0) {
                this.props.history.push('/add-user/_add');
            } else {
                this.setState({ users: res.data });
            }
        }).catch((error) => {
            console.log('Error fetching users:', error);
        });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }

    handleSearchChange(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        const filteredItems = this.state.users.filter((user) =>
            user.nama.toLowerCase().includes(this.state.search.toLowerCase())
        );

        return (
            <div className="bgList">
                <div className="image-item">
                    <img src={foto1} alt="Puskesmas" />
                </div>

                <h2 className="text">Patient List</h2>
            <hr/>
                <div className="row d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={this.addUser}>
                        Add Patient
                    </button>
                </div>
                <br />
                <div className="row row-search">
  <div className="col-md-6 offset-md-3">
    <input
      type="text"
      placeholder="Search by Patient Name"
      value={this.state.search}
      onChange={this.handleSearchChange}
      className="form-control search-input"
    />
  </div>
</div>

                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-sm mx-auto">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Usia</th>
                                <th>Alamat</th>
                                <th>Jenis Kelamin</th>
                                <th>Deskripsi</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map(user => (
                                <tr key={user.id}>
                                    <td>{user.nama}</td>
                                    <td>{user.usia}</td>
                                    <td>{user.alamat}</td>
                                    <td>{user.jenis_kelamin}</td>
                                    <td>{user.deskripsi}</td>
                                    <td>
                                        <button onClick={() => this.editUser(user.id)} className="btn btn-info">
                                            Update
                                        </button>
                                        <button
                                            style={{ marginLeft: '10px' }}
                                            onClick={() => this.deleteUser(user.id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            style={{ marginLeft: '10px' }}
                                            onClick={() => this.viewUser(user.id)}
                                            className="btn btn-info"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        );
    }
}

export default ListUserComponent;
