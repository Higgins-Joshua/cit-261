<?php include("../includes/header.php");?>

<!-- using: https://api.github.com/users/{user} -->

    <div class="container">
        <div class="row" style="margin-bottom:50px;">
            <div class="col-12">
                <h3>JSON Parse, Stringify</h3>
                <h3>Using XMLHTTPRequest to Consume a JSON Web Service</h3>
                <h3>Local Storage API, Storing and Retrieving Simple Data, Arrays, Associative Arrays, and Objects</h3>
                <h3>DOM Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.</h3>
                <hr/>
                <img class="img-fluid" src="/topic3-4-5-6/img/github-logo.png"/>
                <h3 style="font-size:1.0em;font-weight:700;">GitHub User Information:</h3>
                <p>Enter a github username to get back their profile details and repositories.</p>
                <p>Due to api call limits the only user that will return any data is my main github account, search: "Higgins723"</p>
                <input oninput="changeButtonStatus()" placeholder="GitHub user" class="form-control githubUsername">
                <br>
                <button disabled type="button" class="btn primary searchUser"><i class="fab fa-github"></i> Search</button>
                <button type="button" onclick="deleteLocal()" class="btn primary">Delete Local Storage</button>
                <hr/>
            </div>
            <div class="col-12 gitContent">
            </div>
        </div>
    </div>

<script src="/topic3-4-5-6/js/apiHandler.js"></script>
<?php include("../includes/footer.php");?>