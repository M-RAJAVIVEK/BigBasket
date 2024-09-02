const Login=()=>{
    return(
    <>
    <center>

    <div class="login-container">
        <h2 class="text-center">Login</h2>
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="mt-3 text-center">
                <a href="#">Forgot your password?</a>
            </div>
        </form>
    </div>

    </center>

    </>
    )
}
export default Login;