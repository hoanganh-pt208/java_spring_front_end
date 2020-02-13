<div class="container" style="padding-top: 250px;">
	<div class="row" style="min-width: 650px;">
		<div class="col-xs-3 col-sm-3 col-md-4 col-lg-4"></div>
	    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4" >
	    	<img style="width: 340px;" src="images/logo/proxima_login_logo.png">
	    	<br/><br/>
	    	<form method="POST" id="formLogin" action="" autocomplete="off">
				<div class="form-group">
					<div class="input-group">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user icon_login_form"></i></span>
						<input style="min-width: 300px;" id="user_login" required type="text" class="form-control no-border" value="<?php if(isset($_COOKIE["name"])) { echo $_COOKIE["name"]; } ?>" name="name" placeholder="<?php echo txt_userid; ?>">
					</div>
				</div>
				<div class="form-group">
					<div class="input-group">
						<span class="input-group-addon"><i class="glyphicon glyphicon-lock icon_login_form"></i></span>
						<input style="min-width: 300px;" id="pass_login" required type="password" class="form-control" value="<?php if(isset($_COOKIE["password"])) { echo $_COOKIE["password"]; } ?>" name="password" placeholder="<?php echo txt_password; ?>">
					</div>
				</div>
				<button type="submit" name="login" class="btn btn-primary btn-block" style="min-width: 340px;"><?php echo txt_login?></button><br>
				<div class="inline" style="min-width: 340px;">
					<select class="form-control" id="lang_type_selected" name='lang' onchange='changeLang();' style="height: 19px; width: 135px;float: left;margin-top: -3px;padding: 0px;border: none;box-shadow: none;">
					   <option value='eng' <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'eng'){ echo "selected"; } ?> >English (ENG)</option>
					   <option value='vie' <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'vie'){ echo "selected"; } ?> >Vietnamese (VIE)</option>
				  	</select>
				    <div style="float:right; font-size: 95%; top:-20px;">
                       	<a href="templates/auth/forgot_password.php" style="color:#979797; text-decoration: none;">Forgot Password ?</a>
                    </div>
				</div>
				<div class="alert alert-danger <?php if($error != 1){ echo "hidden"; } ?>"><?php echo txt_login_fail?></div>
			</form>
	    </div>
	  	<div class="col-xs-3 col-sm-3 col-md-4 col-lg-4"></div>
  	</div>
</div>
<script src="js/login.js"></script>