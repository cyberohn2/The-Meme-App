import { useEffect, useState } from "react";

function useTweets(tweetID) {
    
    const client = new TwitterAPI({
        apiKey: 'I085HmuQUxQdR6gzyT0MsZlkN',
        apiSecret: 'zeI84jQ61UUapaNiSwJEcSjaeN1n1NW6fIblux1DAKY4oPIzzj',
        accessToken: '1391027437253844992-IwmkKvWsHngCASDxEfeZWMvsc3f2R5',
        accessTokenSecret: 'pubnqEHlu6B88YBFOkiwCPyFczlvkvks4mqlQnkeqios1',
    });
}

export default useTweets;