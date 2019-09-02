import Router from 'next/router';

const redirect = (ctx = {}, target) => {
  if (ctx.res) {
    // server side redirection
    // More info: https://bit.ly/2TcSlQ9
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    // client side redirection
    Router.push(target);
  }
};

export default redirect;
