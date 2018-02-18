<?php include("../includes/header.php");?>

<link rel="stylesheet" type="text/css" href="/CSS-Assignment/css/lesson.css" />

<div class="container">
    <div class="row">
        <div class="col-12">
            <h3>CSS3 Transitions and Animations in CSS and triggering them with JavaScript</h3>
            <hr/>
            <p>CSS transitions allows you to change property values smoothly (from one value to another), over a given duration. <a href="https://www.w3schools.com/css/css3_transitions.asp" target="_blank"><cite>https://www.w3schools.com/css/css3_transitions.asp</cite></a></p>
            <button type="button" class="btn primary">Example 1</button>
        </div>

        <div class="col-4">
            <p>CSS animations allows animation of most HTML elements without using JavaScript or Flash! <a href="https://www.w3schools.com/css/css3_animations.asp" target="_blank"><cite>https://www.w3schools.com/css/css3_animations.asp</cite></a></p>
            <div id="balls">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div class="col-4">
            <p>Another more simple animation:</p>
            <div id="animatedCircle"></div>
        </div>

        <div class="col-4">
            <p>Animation triggered with Javascript</p>
            <div class="rightArrow"><i class="fas fa-arrow-right fa-5x"></i></div>
            <button class="rightArrowBtn btn primary" value="play">Play</button>
        </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h3>Designing, Defining, and Triggering CSS3 Transitions without Custom Libraries</h3>
        <hr/>
      </div>

      <div class="col-4">
        <p>To create a transition effect, you must specify two things:</p>
        <ul>
          <li>the CSS property you want to add an effect to</li>
          <li>the duration of the effect</li>
          <ul>
            <li>the duration default is 0, if you don't set it, the transition will have no effect</li>
          </ul>
        </ul>
      </div>

      <div class="col-4">
        <div class="transitionSquare"></div>
        <pre>
          <code>
            .transitionSquare {
                width: 100px;
                height: 100px;
                background: #851c75;
                -webkit-transition: width 2s, background-color 2s ease;
                        transition: width 2s, background-color 2s ease;
            }
            .transitionSquare:hover {
                width: 400px;
                background: #20a055;
            }
          </code>
        </pre>        
      </div>

      <div class="col-4">
        <p>Same but triggered with JS</p>
        <div class="transitionSquare2"></div>
        <br/>
        <button class="transitionSquare2Btn btn primary" value="grow">Grow</button>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h3>Designing, Defining, and Triggering CSS3 Transforms without Custom Libraries</h3>
        <hr/>
      </div>

      <div class="col-4">
        <p>The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.</p>
      </div>

      <div class="col-4">
        <div class="transform"></div>
      </div>

    </div>

    <div class="row">
      <div class="col-12">
        <h3>Designing, Defining, and Triggering CSS3 Animations without Custom Libraries</h3>
        <hr/>
      </div>

      <div class="col-4">
        <p>An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times you want. To use CSS animation, you must first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times.</p>
      </div>

      <div class="col-4">
        <div class="animationEx"></div>
      </div>

    </div>
    <br/><br/>

  <!-- end container -->
</div>

<script src="/CSS-Assignment/js/lesson.js"></script>

<?php include("../includes/footer.php");?>