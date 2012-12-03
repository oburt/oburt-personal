<?php $page = 'contact'; ?>
<?php require_once('header.php'); ?>

	<div class="be-content">
		<div class="container">
			<div class="row">
				<div class="span12 be-banner-contact">

				</div>
			</div>
			<div class="row be-contact-area">
				<div class="span8 offset2">
					<p>
						If you have any questions, are looking for a quote, or just need more information, we would love to hear from you. Please call us at <a href="tel:1-206-779-6856">(206) 779-6856</a>, email us at <a href="mailto:cb@burtengineering.com">cb@burtengineering.com</a>, or send a message using the form below.
					</p>
					<form id="message-form" class="form-horizontal well">
						<div class="control-group">
							<label class="control-label" for="inputName">Name</label>
							<div class="controls">
								<input type="text" id="inputName" />
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputEmail">Email</label>
							<div class="controls">
								<input type="text" id="inputEmail" />
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputSubject">Subject</label>
							<div class="controls">
								<input type="text" id="inputSubject" value="I have a question about..." />
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputMessage">Message</label>
							<div class="controls">
								<textarea row="6" id="inputMessage" class="span5"></textarea>
							</div>
						</div>
						<div class="control-group">
							<div class="controls">
								<button type="submit" class="btn btn-success">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

<?php require_once('footer.php'); ?>