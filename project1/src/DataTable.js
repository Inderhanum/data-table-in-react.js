const DataTable=()=>{
    return <div className='container'>
        <div className='add-container'>
        <div className='info-continer'>
            <input type='text' placeholder='Name' name='name' value={''} onchange={()=>{}}/>
            <input type='text' placeholder='Gender' name='Gender' value={''} onchange={()=>{}}/>
            <input type='text' placeholder='Age' name='Age' value={''} onchange={()=>{}}/>
        </div>
        <button className='add'>ADD</button>
        </div>
        <div className='search-table-container'>
        <input type='text' placeholder='Search' className='search-input' value={''} onchange={()=>{}}/>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='actions'>
                        <button className='edit'>Edit</button>
                        <button className='delete'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className='pagination'>

        </div>
        </div>
    </div>
};
export default DataTable;