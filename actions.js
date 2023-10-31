const ACTIONS = {
    JOIN: 'join',
    LEAVE: 'leave',
    ADD_PEER: 'add-peer',
    REMOVE_PEER: 'remove-peer',
    RELAY_ICE: 'relay-ice',
    RELAY_SDP: 'relay-sdp',
    SESSION_DESCRIPTION: 'session-description',
    ICE_CANDIDATE: 'ice-candidate',
    MUTE: 'mute',
    UNMUTE: 'unmute',
    MUTE_INFO: 'mute-info',
    START_SCREEN_SHARING: 'START_SCREEN_SHARING',
    On_STREAM: 'start_stream',
    Off_STREAM: 'stop_stream',
    STREAM_INFO: 'stream-info',
    CHAT_MESSAGE:'CHAT_MESSAGE',
};

module.exports = ACTIONS;
