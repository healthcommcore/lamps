<?php // @version $Id: default.php 10498 2008-07-04 00:05:36Z ian $
defined('_JEXEC') or die('Restricted access');
$title = $this->params->get('page_title') . " results";
$document =& JFactory::getDocument();
$document->setTitle($title);
?>

<?php if($this->params->get('show_page_title',1)) : ?>
<h1>
	<?php echo $this->escape($this->params->get('page_title')) . " results"; ?>
</h1>
<?php endif; ?>

<div id="page">
	<div class="search-results-full">
		<?php if (!$this->error) :
			echo $this->loadTemplate('results');
		else :
			echo $this->loadTemplate('error');
		endif; ?>
		<?php echo $this->loadTemplate('form'); ?>
	</div>
</div>