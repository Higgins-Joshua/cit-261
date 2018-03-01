<?php include("../includes/header.php");?>

<div class="container">
    <div class="row" style="margin-bottom:50px;">
        <div class="col-12">
            <h3>Object Creation Functions, Inheritance, Properties, Methods, Instantiation</h3>
            <h3>Local Storage API, Storing and Retrieving Simple Data, Arrays, Associative Arrays, and Objects</h3>
            <hr/>
        </div>
        <div class="col-6">
            <h3>Create Car Object:</h3>
            <input placeholder="Make" class="form-control make">
            <br/>
            <input placeholder="Model" class="form-control model">
            <br/>
            <input placeholder="Year" class="form-control year">
            <br/>
            <button type="button" class="btn primary addCar">Add Car</button>
        </div>
        <div class="col-6">
            <h3>Local List of Cars:</h3>
            <span class="carsBtn"></span>
            <div class="carList"></div>
        </div>
    </div>
  <!-- end container -->
</div>

<script src="/topic2-5/js/main.js"></script>

<?php include("../includes/footer.php");?>