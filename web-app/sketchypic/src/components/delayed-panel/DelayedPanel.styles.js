const styles = theme => {
    return ({
      main: {
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'black',
        fontWeight:  700,
        fontSize: '12pt'
      },
      githubButton: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
      },
      githubLogo: {
        width: 50,
        height: 50,
        marginTop: -7
      }
    });
  };
  
  export default styles;