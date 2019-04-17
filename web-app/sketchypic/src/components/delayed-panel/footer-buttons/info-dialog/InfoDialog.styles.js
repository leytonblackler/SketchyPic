const styles = theme => {
    return ({
      titleContainer: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 30,
        paddingRight: 17
      },
      titleContents: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      contentContainer: {
        paddingTop: 0,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30
      },
      closeButton: {
        width: 50,
        height: 50
      }
    });
  };
  
  export default styles;