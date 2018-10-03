constructor(props) {
  super(props);
  this.pubnub = new PubNubReact({
    publishKey: 'pub-c-fadccdd5-940d-40c7-8919-ee39eed1be9e',
    subscribeKey: 'sub-c-43f4ebaa-c676-11e8-a415-1a3a09e2960b'
  });
  this.pubnub.init(this);
}
