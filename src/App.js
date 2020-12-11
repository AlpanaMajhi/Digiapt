import MUIDataTable from "mui-datatables";
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const data = require('./data.json');
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  processData = (data) => {
    const userData = data.map(user => {
      return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website
      }
    });
    return userData;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: this.processData(data) });
    }, 2000)
  }

  processMUITheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          padding: '3px 10px 3px'
        }
      },
    }
  })

  render() {
    const columns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "email",
        label: "Email Id",
        options: {
          filter: true,
          sort: false,
        }
      },
      {
        name: "phone",
        label: "Phone Number",
        options: {
          filter: true,
          sort: false,
        }
      },
      {
        name: "website",
        label: "Website",
        options: {
          filter: true,
          sort: false,
        }
      },
    ];


    const options = {
      textLabels: {
        body: {
          noMatch: this.state.data.length === 0 && "Loading...."
        }
      }
    }


    return (
      <div>
        <MuiThemeProvider>
          <MUIDataTable
            title={"Users List"}
            data={this.state.data}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div >
    )

  }
}

export default App;