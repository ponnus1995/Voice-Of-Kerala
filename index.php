<?php get_header(); ?>


<div id="content" <?php post_class(); ?>>

<?php
$page_layout = of_get_option('blog_images');
switch ($page_layout) {
    case "left-blog-sidebar":
        echo '
<div class="sidebar-left">';
        wz_setSection('zone-sidebar');
        if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('sidebar-page'));
        echo '
</div><!-- end .sidebar-left -->';
        break;
    case "right-blog-sidebar":
        echo '
<div class="sidebar-right">';
        wz_setSection('zone-sidebar');
        if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('sidebar-page'));
        echo '
</div><!-- end .sidebar-right -->';
        break;
}
?>
	
<div class="row fixed">  

<div class="title-home"><h3>Recent Posts</h3></div>

    <div class="col-blog-archive">
<?php
if (have_posts())
    while (have_posts()):
        the_post();
        $image_id = get_post_thumbnail_id($post->ID);
        $cover    = wp_get_attachment_image_src($image_id, 'blog-preview');
        echo '
        <div class="blog-archive">';
        
        if ($image_id) {
        echo '<div class="blog-arc-cover">
            <a href="' . get_permalink() . '">
        
           <img src="' . $cover[0] . '" alt="' . get_the_title() . '" />
            </a>
            </div><!-- end .blog-arc-cover -->';
        }
        echo '
            <h2 class="blog-arc-heading"><a href="' . get_permalink() . '" rel="bookmark">' . get_the_title($post->ID) . '</a></h2>
             <div class="blog-arc-info">
                    <p class="blog-user">' . get_the_author() . '</p> 
                    <p class="blog-date">' . get_the_time('F jS, Y') . '</p> 
                    <p class="blog-comment"><a href="' . get_comments_link() . '">' . get_comments_number() . ' ' . __('Comments', 'clubber') . '</a></p> 
                </div>';

            
        echo 
            "<p>" . get_the_excerpt() . "</p>";
        echo '
            <div class="blog-arc-more"><a href="' . get_permalink() . '" rel="bookmark">Read more</a></div><!-- end .blog-arc-more -->
        </div><!-- end .blog-archive -->
        ';
        
    endwhile;

?>


        <div class="pagination-pos">
            <?php
if (function_exists("pagination")) {
    pagination();
}
?>
        </div><!-- end .pagination-pos -->								
    </div><!-- end .col-blog-archive -->
    			 
</div><!-- end .row fixed -->
</div><!-- end #content -->

<?php the_tags(); ?>
<?php wp_link_pages(); ?>

<?php get_footer(); ?>