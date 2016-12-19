<?php
/**
 * Created by PhpStorm.
 * User: christinelopez
 * Date: 12/6/16
 * Time: 1:45 PM
 */
//multiline comment
// phpinfo();
//
// echo "<h2>this is a line of php. ". $name."</h2>";
// $teams=array (
//   "redsox",
//   "celtics",
//   "bruins",
//   "ruggers",
//   "revolution",
//   "cannons",
//   );
//
// //  echo "soccer: $teams[4]" ;
// // $name= "saul";
//
// // echo "$name";
// // echo "<h2>";
//
// print_r ($_SERVER) ;

//header("Content-Type: image/png");
//
//$png_image = imagecreate ( 600, 600 ) ;
//
//$background_color = imagecolorallocate ( $png_image, 0, 0, 250 );
//
//imagepng ($png_image) ;

if($_FILES) {
  echo 'a file was submited.';

//  print_r($_FILES['file_to_upload']);


  if ($_FILES['file_to_upload']['size'] != 0) {

    $upload_file = 'uploads/' . $_FILES['file_to_upload']['name'];

    move_uploaded_file($_FILES['file_to_upload']['tmp_name'], $upload_file);

    echo

    exit ;
  }

}
?>

<html>

<title>Upload test</title>

<body>

<form action="test.php" method="post" enctype="multipart/form-data">

<!--  FILENAME:<input type="text" name="filename" id="filename"><br><br>-->

  <input type="file" name="file_to_upload" id="filename"> <br><br>

  <input type="submit">

</form>

<?php

//phpinfo() ;
?>

</body>
</html>