package com.advenoh.mypolls.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChoiceResponse {
    private long id;
    private String text;
    private long voteCount;
}
