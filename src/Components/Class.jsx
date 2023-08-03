import React, { Component } from 'react';

class Class extends Component {
    render() {
        const { record, number, button } = this.props;

        return (
            <center>
                <h1>Student Data(Class Component)</h1>
                <table border={10}>
                    <thead>
                        <tr>
                            <td>Grid</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Course</td>
                            <td>City</td>
                            <td>{number}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((v) => (
                            <tr key={v.grid}>
                                <td>{v.grid}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.password}</td>
                                <td>{v.course}</td>
                                <td>{v.city}</td>
                                <td>
                                    <button onClick={() => button()}>+</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        );
    }
}

export default Class;
