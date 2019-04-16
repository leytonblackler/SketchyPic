const styles = theme => {
    return ({
      main: {
        width: '100%',
        height: 'calc(100vh - 220px - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      content: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        borderWidth: 2,
        textTransform: 'none',
        fontFamily: 'CircularStd',
        borderColor: 'black',
        fontWeight:  600,
        fontSize: '14pt'
      },
      circleButtonsContainer: {
        marginBottom: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      circleButton: {
        marginLeft: 50,
        marginRight: 50,
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
  };
  
  export default styles;