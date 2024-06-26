<?php
/**
 * Block Name: UniversHeart
 *
 *
 */
?>

<?php
if(is_admin()): echo "<div style=\"width: 100%; padding: 40px 20px;text-align: center;font-size: 10px;background: #eee\">Univers Coeur d'Aesthe</div>";
else: ?>



<section class="universHeart universHeart--<?= $block['id'] ?>">
    <div class="universHeart__img universHeart__img1">
        <?php echo wp_get_attachment_image( get_field('image_1')['ID'], 'medium' ); ?>
    </div>
    <div class="universHeart__wheel">
        <svg  viewBox="0 0 706 651" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M530 316.5C530 408.455 455.232 483 363 483C270.768 483 196 408.455 196 316.5C196 224.545 270.768 150 363 150C455.232 150 530 224.545 530 316.5Z" fill="#FDF3EB"/>
            <path d="M522.5 316.5C522.5 404.312 451.091 475.5 363 475.5C274.909 475.5 203.5 404.312 203.5 316.5C203.5 228.688 274.909 157.5 363 157.5C451.091 157.5 522.5 228.688 522.5 316.5Z" stroke="#FF8347"/>
            <path d="M363 0C359.287 0 355.726 1.47499 353.1 4.1005C350.475 6.72601 349 10.287 349 14L377 14C377 10.287 375.525 6.72601 372.9 4.1005C370.274 1.47499 366.713 0 363 0V0Z" fill="#FF8347"/>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="290.129" y="54.376">Philosophie</tspan></text>
            <g clip-path="url(#clip0)">
            <path d="M555.5 64C551.787 64 548.226 65.475 545.6 68.1005C542.975 70.726 541.5 74.287 541.5 78H569.5C569.5 74.287 568.025 70.726 565.4 68.1005C562.774 65.475 559.213 64 555.5 64V64Z" fill="#FF8347"/>
            </g>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="470.188" y="118.376">Communaut&#xe9;</tspan></text>
            <g clip-path="url(#clip1)">
            <path d="M654.5 207C650.787 207 647.226 208.475 644.6 211.1C641.975 213.726 640.5 217.287 640.5 221H668.5C668.5 217.287 667.025 213.726 664.4 211.1C661.774 208.475 658.213 207 654.5 207V207Z" fill="#FF8347"/>
            </g>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="610.162" y="261.376">&#xc9;quipe</tspan></text>
            <path d="M170 66C166.287 66 162.726 67.475 160.1 70.1005C157.475 72.726 156 76.287 156 80H184C184 76.287 182.525 72.726 179.9 70.1005C177.274 67.475 173.713 66 170 66V66Z" fill="#FF8347"/>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="125.143" y="120.376">Valeurs</tspan></text>
            <path d="M72 207C68.287 207 64.726 208.475 62.1005 211.1C59.475 213.726 58 217.287 58 221H86C86 217.287 84.525 213.726 81.8995 211.1C79.274 208.475 75.713 207 72 207V207Z" fill="#FF8347"/>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="14.1543" y="261.376">M&#xe9;thode</tspan></text>
            <path d="M73 372C69.287 372 65.726 373.475 63.1005 376.1C60.475 378.726 59 382.287 59 386H87C87 382.287 85.525 378.726 82.8995 376.1C80.274 373.475 76.713 372 73 372V372Z" fill="#FF8347"/>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="0.375" y="426.376">Diagnostics</tspan></text>
            <g clip-path="url(#clip2)">
            <path d="M160.5 510C156.787 510 153.226 511.475 150.6 514.1C147.975 516.726 146.5 520.287 146.5 524H174.5C174.5 520.287 173.025 516.726 170.4 514.1C167.774 511.475 164.213 510 160.5 510V510Z" fill="#FF8347"/>
            </g>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="90.4727" y="564.376">Référentiel</tspan></text>
            <path d="M363 590C359.287 590 355.726 591.475 353.1 594.1C350.475 596.726 349 600.287 349 604H377C377 600.287 375.525 596.726 372.9 594.1C370.274 591.475 366.713 590 363 590V590Z" fill="#FF8347"/>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="298.414" y="644.376">Formation</tspan></text>
            <g clip-path="url(#clip3)">
            <path d="M559.5 510C555.787 510 552.226 511.475 549.6 514.1C546.975 516.726 545.5 520.287 545.5 524H573.5C573.5 520.287 572.025 516.726 569.4 514.1C566.774 511.475 563.213 510 559.5 510V510Z" fill="#FF8347"/>
            </g>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="513.084" y="564.376">Budget</tspan></text>
            <path d="M657 372C653.287 372 649.726 373.475 647.1 376.1C644.475 378.726 643 382.287 643 386H671C671 382.287 669.525 378.726 666.9 376.1C664.274 373.475 660.713 372 657 372V372Z" fill="#FF8347"/>
            <text fill="#4032B8" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="28" letter-spacing="0px"><tspan x="608.246" y="426.376">Centres</tspan></text>
            <text fill="#322BB2" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="34" letter-spacing="1px"><tspan x="286.766" y="262.278">Parce que&#10;</tspan></text>
            <text fill="#322BB2" xml:space="preserve" style="white-space: pre" font-family="Fleya" font-size="42" font-weight="500" letter-spacing="1px"><tspan x="318.66" y="307.278">vous</tspan></text>
            <text fill="#322BB2" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="34" letter-spacing="1px"><tspan x="262.621" y="346.278">&#xea;tes au c&#x153;ur</tspan></text>
            <path d="M339.901 394.863C338.694 394.863 338.369 394.213 338.369 392.819V379.907C338.369 374.844 334.56 372.986 330.054 372.986C327.732 372.986 325.224 373.451 322.994 374.24L320.997 374.937L320.533 381.114H324.063L324.759 378.421C325.363 376.237 326.942 375.169 329.079 375.169C331.216 375.169 332.702 376.237 332.702 378.839V381.393C332.702 382.787 332.377 383.437 331.169 383.437H327.546C321.183 383.437 319 386.409 319 390.357C319 394.259 321.369 396.907 327.686 396.907H341.806V394.863H339.901ZM332.702 390.311C332.702 394.027 330.705 394.863 328.8 394.863C326.106 394.863 325.038 393.144 325.038 390.357C325.038 385.852 327.593 385.481 329.404 385.481H332.702V390.311Z" fill="#322BB2"/>
            <path d="M364.337 385.481V383.948C364.337 376.981 360.249 372.986 354.118 372.986C346.826 372.986 343.064 378.513 343.064 385.434C343.064 393.33 348.266 397.603 354.49 397.603C356.766 397.603 359.042 397.046 361.225 395.931L363.408 394.863V392.448H362.99L360.76 393.469C359.088 394.259 357.648 394.631 356.208 394.631C351.935 394.631 349.381 391.286 349.427 385.481H364.337ZM354.072 375.03C356.719 375.03 357.973 377.91 357.973 380.929C357.973 383.483 357.23 383.53 356.441 383.53H351.378C350.681 383.53 349.845 383.483 349.845 381.114C349.845 378.142 351.331 375.03 354.072 375.03Z" fill="#322BB2"/>
            <path d="M377.855 382.74C374.882 381.718 372.281 380.789 372.281 378.467C372.281 376.377 374.092 375.262 376.415 375.262C379.062 375.262 380.688 376.795 381.431 378.467L382.453 380.929H384.636L384.032 374.612L381.895 373.962C379.991 373.358 378.18 372.986 376.275 372.986C371.398 372.986 367.683 375.448 367.683 380.186C367.683 384.552 370.748 386.409 374.975 387.896C378.644 389.15 380.734 389.893 380.734 392.215C380.734 394.724 378.598 395.42 376.322 395.42C373.07 395.42 371.491 393.98 370.795 392.169L369.587 389.011H367.218L367.822 395.699L369.726 396.396C371.724 397.139 373.628 397.557 376.043 397.557C380.827 397.557 385.425 395.745 385.425 390.59C385.425 385.434 381.013 383.855 377.855 382.74Z" fill="#322BB2"/>
            <path d="M396.982 377.91C396.982 376.516 397.307 375.866 398.515 375.866H403.856V373.683H396.982V365.973H396.564L391.176 367.412V371.639C391.176 373.033 390.851 373.683 389.643 373.683H386.485V375.866H391.176V392.633C391.176 395.327 392.569 397.278 395.403 397.278C396.239 397.278 397.214 397.092 398.282 396.721L403.624 395.002V392.819H403.206L400.047 393.887C399.583 394.073 399.118 394.12 398.747 394.12C397.632 394.12 396.982 393.423 396.982 392.076V377.91Z" fill="#322BB2"/>
            <path d="M429.021 394.863C427.813 394.863 427.488 394.213 427.488 392.819V379.349C427.488 375.169 424.933 372.986 421.171 372.986C417.827 372.986 415.923 374.519 414.483 375.727L413.414 376.609V363H404.543V365.044H406.447C407.655 365.044 407.98 365.694 407.98 367.087V392.819C407.98 394.213 407.655 394.863 406.447 394.863H404.543V396.907H416.108V394.863H414.947C413.74 394.863 413.414 394.213 413.414 392.819V379.396L414.529 378.513C415.876 377.492 417.223 376.516 418.988 376.516C421.357 376.516 422.007 378.374 422.007 380.325V392.819C422.007 394.213 421.682 394.863 420.474 394.863H419.313V396.907H430.879V394.863H429.021Z" fill="#322BB2"/>
            <path d="M443.776 373.508V365.476L439.023 366.873V373.508L439.317 373.683L443.125 373.227L443.776 373.508ZM451.672 385.481V383.948C451.672 376.981 447.584 372.986 441.453 372.986C434.161 372.986 430.399 378.513 430.399 385.434C430.399 393.33 435.601 397.603 441.825 397.603C444.101 397.603 446.377 397.046 448.56 395.931L450.743 394.863V392.448H450.325L448.095 393.469C446.423 394.259 444.983 394.631 443.544 394.631C439.27 394.631 436.716 391.286 436.762 385.481H451.672ZM441.407 375.03C444.054 375.03 445.309 377.91 445.309 380.929C445.309 383.483 444.565 383.53 443.776 383.53H438.713C438.016 383.53 437.18 383.483 437.18 381.114C437.18 378.142 438.667 375.03 441.407 375.03Z" fill="#322BB2"/>
            <text fill="#322BB2" xml:space="preserve" style="white-space: pre" font-family="Avenir" font-size="34" letter-spacing="1px"><tspan x="283.359" y="396.278">d&#x2019;</tspan></text>
            <defs>
            <clipPath id="clip0">
            <rect width="28" height="14" fill="white" transform="translate(541.5 64)"/>
            </clipPath>
            <clipPath id="clip1">
            <rect width="28" height="14" fill="white" transform="translate(640.5 207)"/>
            </clipPath>
            <clipPath id="clip2">
            <rect width="28" height="14" fill="white" transform="translate(146.5 510)"/>
            </clipPath>
            <clipPath id="clip3">
            <rect width="28" height="14" fill="white" transform="translate(545.5 510)"/>
            </clipPath>
            </defs>
        </svg>
    </div> 
    <div class="universHeart__img universHeart__img2">
        <?php echo wp_get_attachment_image( get_field('image_2')['ID'], 'medium' ); ?>
    </div>       
</section>




<?php endif; ?>