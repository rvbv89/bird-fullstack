export const COLUMNS = [
  {
    Header: "Common Name",
    accessor: "comName",
    Cell: (props) => {
      return (
        <div
          className="table-cell"
          onClick={() => {
            const ebird_redirect = `https://ebird.org/species/${props.cell.row.original["speciesCode"]}`;
            window.open(ebird_redirect);
            console.log("testingproppass");
          }}
        >
          {props.cell.value}
        </div>
      );
    },
  },
  {
    Header: "Scientific Name",
    accessor: "sciName",
    Cell: (props) => {
      return (
        <div
        className="table-cell"
          onClick={() => {
            const ebird_redirect = `https://ebird.org/species/${props.cell.row.original["speciesCode"]}`;
            window.open(ebird_redirect);
            console.log("testingproppass");
          }}
        >
          {props.cell.value}
        </div>
      );
    },
  },
  {
    Header: "Location",
    accessor: "locName",
    Cell: (props) => {
      return <div
      onClick={()=>{
        console.log(props.cell.row.original)
      }}
      >{props.cell.value}</div>;
    },
  },
  {
    Header: "Date",
    accessor: "obsDt",
    Cell: (props) => {
      return <div>{props.cell.value}</div>;
    },
  },
];
