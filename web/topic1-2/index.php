<?php include("../includes/header.php");?>

<div class="container">
    <div class="row" style="margin-bottom:50px;">
        <div class="col-12">
            <h3>Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays</h3>
            <h3>Object Creation Functions, Inheritance, Properties, Methods, Instantiation</h3>
            <hr/>
            <div class="text-center">
                <h3>Ball Clock</h3>
                <p>The ball clock is a simple device which keeps track of the passing minutes by moving ball-bearings. Each minute, a rotating arm removes a ball bearing from the queue at the bottom, raises it to the top of the clock and deposits it on a track leading to indicators displaying minutes, five-minutes, and hours.</p>
                <img class="img-fluid" src="img/ball-clock.jpg">
            </div>
            <p>Most commercially available ball clocks do not incorporate a date indication, although this would be simple to do with the addition of further carry and indicator tracks. As the balls migrate through the mechanism of the clock, the order they are found in can be used to determine the time elapsed since the clock had some specific ordering. The length of time which can be measured is limited because the orderings of the balls eventually begin to repeat.</P>
            <h3>Below you can enter the amount of balls or balls and minutes</h3>
            <p>Valid numbers of balls are in the range 27 to 127.</p>
            <p>1.) The first mode takes a single parameter specifying the number of balls and reports the number
            of balls given in the input and the number of days (24-hour periods) which elapse before the
            clock returns to its initial ordering.</p>
            <p>2.) The second mode takes two parameters, the number of balls and the number of minutes to run for. The clock must run to the number of minutes and report the state of the tracks at that point in a JSON format.</p>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-6">
                    <h3>First Mode</h3>
                    <input placeholder="Number of balls" class="form-control ballsInputFirst">
                    <br/>
                    <button type="button" class="btn primary firstMode">Run Cycle</button>
                </div>
                <div class="col-6">
                    <h3>Response:</h3>
                    <span id="firstModeResponse"></span>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-6">
                    <h3>Second Mode</h3>
                    <input placeholder="Number of balls" class="form-control ballsInputSecond">
                    <input placeholder="Number of mins" class="form-control minsInputSecond">
                    <br/>
                    <button type="button" class="btn primary secondMode">Run Cycle</button>
                </div>
                <div class="col-6">
                    <h3>Response:</h3>
                    <span id="secondModeResponse"></span>
                </div>
            </div>
        </div>
    </div>
  <!-- end container -->
</div>

<script src="/topic1-2/js/ballClock.js"></script>

<?php include("../includes/footer.php");?>