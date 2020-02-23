import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer MfhnBiGwBXPHTng50aQ-YrzM4hTy5OSVHPpoUDSvDLjEaPwjhW4WN_p4BfV9YECfP04KLZIEb8rhN8HtC-VKfSJd5MaH1zPy8OKdVh2w1Zirehv4HGKmS33QV41RXnYx'
    }
});
