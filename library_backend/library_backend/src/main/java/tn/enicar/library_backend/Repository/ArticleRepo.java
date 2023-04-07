package tn.enicar.library_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.enicar.library_backend.Models.Collections.Article;

public interface ArticleRepo extends JpaRepository<Article,Long> {
}
