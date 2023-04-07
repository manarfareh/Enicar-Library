package tn.enicar.library_backend.Resources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Services.ArticleService;

import java.util.List;

@RestController
@RequestMapping("/Article")
public class ArticleResource {
@Autowired
    private  ArticleService articleService;

@GetMapping("/all")
    public ResponseEntity<List<Article>> getAllArticle(){
    List<Article> articleList=ArticleService.findAllArticles();
    return new ResponseEntity<>(articleList, HttpStatus.OK);
}
}
