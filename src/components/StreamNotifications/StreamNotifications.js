import React, { useEffect } from "react";
import {connect} from 'react-redux';

import {actions} from './../../modules/reducers';

const StreamNotification = ({io, dispatch}) => {
  const registerHandlers = socket => {
    socket.on("tweets", data => {
      dispatch(actions.addTweet(data));

      // Extract sentiment and send to redux
      const { sentiment } = data;
      dispatch(actions.addSentiment(sentiment));
    });

    socket.on("disconnect", () => console.log("Socket disconnected."));

    socket.on("error", error => console.log("Socket error: ", error));
  };

  const connectSocket = io => {
    io.connect(registerHandlers);
  };

  useEffect(() => {
    if (io.socket === null) {
      connectSocket(io);
    }
  }, []);

  return <>{/* Notification messages */}</>;
};

export default connect()(StreamNotification);
