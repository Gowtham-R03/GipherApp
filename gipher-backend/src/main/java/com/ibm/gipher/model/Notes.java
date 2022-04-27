package com.ibm.gipher.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="notes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notes {
	@Id
	@GeneratedValue
	private int id;
	
	private String commentedBy;
	private String gipherId;
	
	private String text;
	private int likeCount;
}
