const Function =({record,no,btn}) => {
    return(
        <center>
            <h1>Student Data(function Component)</h1>
            <table border={10}>
                <thead>
                    <tr>
                        <td>Grid</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Course</td>
                        <td>City</td>
                        <td>{no}</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((v)=>{
                            return(
                                <tr key = {v.grid}>
                                    <td>{v.grid}</td>
                                    <td>{v.name}</td>
                                    <td>{v.email}</td>
                                    <td>{v.password}</td>
                                    <td>{v.course}</td>
                                    <td>{v.city}</td>
                                    <td>
                                        <button onClick={ ()=> btn()}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
    )
}
export default Function;