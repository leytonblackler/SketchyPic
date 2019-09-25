const styles = theme => {
  return {
    main: {
      width: "100%",
      height: "calc(100vh - 220px - 100px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    },
    content: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 50,
      borderWidth: 2,
      textTransform: "none",
      fontFamily: "CircularStd",
      borderColor: "black",
      fontWeight: 600,
      fontSize: "14pt"
    }
  };
};

export default styles;
