import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer gkIq_QNRDmx4HC-0y2mrWuaTwFJ88BS0AtaApaFB1YF8wW_4qFMwu6stpcIvQEzFYyUVaqu3qb0LctvaiF7kACfha5V8_eBakGlYv-w0aSWZiwM5qtXq3W7q-ljsX3Yx`,
  },
});
