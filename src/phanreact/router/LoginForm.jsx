function LoginForm({theme, handleChangeTheme}) {
    return(
      <div className={`p-2 ${theme}`}>
        <form>
          <div className='form-group'>
          <input type='email' className='form-control' placeholder='Emaii'/>  
          </div>
          <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'/>  
          </div>
          <div className='form-group mb-3'>
            <button type='submit' className='btn btn-success me-2'>Login</button>
            <button type='button' className='btn btn-sm btn-danger'
            onClick={handleChangeTheme}
          >
            Dark mode
        </button>
          </div>
        </form>
      </div>
    )
  }
export default LoginForm