
function DataTable() {
    return (

        <div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>22/10/2021</td>
                <td>Tiago França</td>
                <td>50</td>
                <td>25</td>
                <td>135017.00</td>
            </tr>

            <tr>
                <td>22/06/2021</td>
                <td>João Silva</td>
                <td>34</td>
                <td>30</td>
                <td>25017.00</td>
            </tr>

            <tr>
                <td>22/05/2021</td>
                <td>Carlos Junior</td>
                <td>50</td>
                <td>15</td>
                <td>75017.00</td>
            </tr>

            <tr>
                <td>10/02/2021</td>
                <td>Paulo Freitas</td>
                <td>70</td>
                <td>55</td>
                <td>35017.00</td>
            </tr>
        </tbody>
    </table>
</div>


    );
}

export default DataTable;