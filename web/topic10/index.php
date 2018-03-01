<?php include("../includes/header.php");?>
<link rel="stylesheet" href="/topic10/css/main.css">

<div class="container">
    <div class="row" style="margin-bottom:50px;">
        <div class="col-12">
            <h3>HTML5 Tags - Video, Audio, and Canvas</h3>
            <hr/>
        </div>
        <div class="col-6">
            <h3>Canvas</h3>
            <canvas id="can" width="700" height="400" style="border:2px solid;"></canvas>
            <br/>
            <button type="button" onclick="erase()" class="btn primary">Clear Canvas</button>
        </div>
        <div class="col-6">
            <h3>Choose Color</h3>
            <button type="button" onclick="color(this)" id="green" class="btn primary">Green <div class="greenSqr sqr"></div></button>
            <button type="button" onclick="color(this)" id="blue" class="btn primary">Blue <div class="blueSqr sqr"></div></button>
            <button type="button" onclick="color(this)" id="red" class="btn primary">Red <div class="redSqr sqr"></div></button>
            <button type="button" onclick="color(this)" id="yellow" class="btn primary">Yellow <div class="yellowSqr sqr"></div></button>
            <button type="button" onclick="color(this)" id="orange" class="btn primary">Orange <div class="orangeSqr sqr"></div></button>  
            <button type="button" onclick="color(this)" id="black" class="btn primary">Black <div class="blackSqr sqr"></div></button>
            <br/>
            <h3>Eraser</h3>
            <button type="button" onclick="color(this)" id="white" class="btn primary">Erase</button>
        </div>

        <div class="col-12">
            <h3>About HTML5 Canvas</h3>
            <hr/>
        </div>
        <div class="col-6">
            <h3>Video Version</h3>
            <video width="750" height="450" controls autoplay>
                <source src="/topic10/content/canvas.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> 
        </div>
        <div class="col-6">
            <h3>Audio Version</h3>
            <audio controls>
                <source src="/topic10/content/canvas.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio> 
        </div>
    </div>
  <!-- end container -->
</div>

<script src="/topic10/js/main.js"></script>

<?php include("../includes/footer.php");?>