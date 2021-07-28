import { useEffect, useState } from 'react'
import { useAuthActions, useAuthState } from 'use-eazy-auth'

export default function Login() {
  const { loginLoading, loginError } = useAuthState()
  const { login, clearLoginError } = useAuthActions()

  // Clear login error when Login component unmount
  useEffect(() => () => clearLoginError(), [clearLoginError])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container pt-5">

      <div className="row mb-3">
        <div className="col-6 offset-3">
          
          <h1 className="text-center">📒 Address Boook App</h1>

          <div className="col-10 offset-1">

            <div className="card mt-5">

              <h5 class="card-header text-info">Please Log In</h5>

              <div className="card-body">

                <form
                  className="mt-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (username !== '' && password !== '') {
                      login({ username, password })
                    }
                  }}
                >
                  
                  <div className="row mb-2">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          placeholder="@username"
                          className="form-control"
                          type="text"
                          value={username}
                          onChange={(e) => {
                            clearLoginError()
                            setUsername(e.target.value)
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          placeholder="password"
                          className="form-control"
                          type="password"
                          value={password}
                          onChange={(e) => {
                            clearLoginError()
                            setPassword(e.target.value)
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-12 text-right">
                      <button className="btn btn-primary" disabled={loginLoading}>
                        {!loginLoading ? 'Login' : 'Logged in...'}
                      </button>
                      {loginError && (
                        <div className="alert alert-danger mt-3">
                          Bad combination of username and password.
                        </div>
                      )}
                    </div>
                  </div>
                  
                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
      
    </div>
  )
}
