package libraryManagementBackend.model;

import java.io.Serializable;

import jakarta.persistence.*;
import jakarta.persistence.GenerationType;

@Entity
public class users implements Serializable {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	@Column(nullable = false, updatable=false)
	private Long id;
	@Column(nullable = false, updatable=false)
	private Long num_insc;
	private String name;
	private String email;
	public static void setUsersCode(String string) {
		// TODO Auto-generated method stub
		
	}
}
