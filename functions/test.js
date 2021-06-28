exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: '조상호',
      age: 36,
      email: 'teha007@naver.com',
    }),
  }
}
