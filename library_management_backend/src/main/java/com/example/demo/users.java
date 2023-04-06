package com.example.demo;

import java.io.Serializable;

import jakarta.persistence.*;


@Entity
@Table(name = "users")
public class users implements Serializable {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	@Column(nullable = false, updatable=false)
	private Long id;
	@Column(nullable = false, updatable=false)
	private Long num_insc;
	private String name;
	private String email;
	public users() {}
}
