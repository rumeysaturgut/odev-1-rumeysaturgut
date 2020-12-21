"use strict";Object.defineProperty(exports, "__esModule", {value: true});const axios = require("axios");
//import axios from 'axios';

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData (userId) {
    try {
		const { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
        const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userId}`);
        user["post"]= posts;
        console.log(user);
	} catch (e) {
		console.log(e);
	}
}

/*function getUser(userId) {
    /*return [axios.get(`${ENDPOINT}/users/${userId}`),axios.get(`${ENDPOINT}/posts?userId=${userId}`)];*/
    /*return new Promise(function(resolve) {
        axios
            .get(`${ENDPOINT}/users/${userId}`)
            .then((response) => response.data)
            .then((user) => {
                axios
                    .get(`${ENDPOINT}/posts?userId=${userId}`)
                    .then((response) => response.data)
                    .then((posts) => {
                        user["post"]= posts;
                        resolve(user);
                    });
            });
    })
};*/

exports.getData = getData;