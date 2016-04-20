module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: 'pat',
      password: '123456',
      database: 'learny'
    },
    pool: {
    	min: 0,
    	max: 7
    }
  }
}