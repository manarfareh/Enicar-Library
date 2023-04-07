package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Repository.ArticleRepo;

import java.util.List;

@Service
public class ArticleService {
private static ArticleRepo articleRepo = null;
@Autowired
public ArticleService(ArticleRepo articleRepo){
    this.articleRepo=articleRepo;
}
public static List<Article> findAllArticles(){

    return articleRepo.findAll();
}


}
