<?php
if (isset($_GET['query'])) {
    $searchQuery = htmlspecialchars($_GET['query']);
    $directory = 'path_to_your_html_files';
    $files = glob($directory . '/*.html');

    $results = [];

    foreach ($files as $file) {
        $content = file_get_contents($file);

        if (stripos($content, $searchQuery) !== false) {
            $results[] = $file;
        }
    }

    if (!empty($results)) {
        echo "<h2>Search Results:</h2>";

        foreach ($results as $result) {
            $filename = basename($result);
            echo "<div>";
            echo "<h3><a href='" . htmlspecialchars($result) . "'>" . htmlspecialchars($filename) . "</a></h3>";
            echo "</div>";
        }
    } else {
        echo "<p>No results found for '" . htmlspecialchars($searchQuery) . "'</p>";
    }
} else {
    echo "<p>No search query provided.</p>";
}
?>