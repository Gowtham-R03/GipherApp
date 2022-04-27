package com.ibm.gipher.model;


import java.io.Serializable;
import java.lang.reflect.Array;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="giphers")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Gipher implements Serializable{
	
	@Id
    private String gipherId;
	
	private String url;
	private String recommendedBy;
	private String favoritedBy;
	private String title;
	private String userId;
	
	 @Column(name = "images", length = 100000)
	private String images;
	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name="img_id",referencedColumnName="gipherId")
//	private List<Images> images = new ArrayList<>();
}